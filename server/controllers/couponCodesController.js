import { db } from "../mysql.js";
import CouponCode from "../models/CouponCodes.js";

export async function getCouponCodes(req, res) {
    if (!req.session.user) {
        return res.status(401).json({ message: 'Not logged in' });
    }

    const query = `
        SELECT CouponCodeID, CouponCode, DiscountPercentage, ExpiryDate
        FROM CouponCode
        WHERE CurrentUsageCount < MaxUsageCount
    `;


    const [couponCodeRows,] = await db.query(query);
    const couponCodes = couponCodeRows.map(row => new CouponCode(
        row.CouponCodeID,
        row.CouponCode,
        row.DiscountPercentage,
        row.ExpiryDate
    ));

    res.json(couponCodes);
}
export async function persistCouponCodes(req, res) {
    if (!req.session.user) {
        return res.status(401).json({ message: 'Not logged in' });
    }
    if (!req.body) {
        return res.status(400).json({ message: "Missing body" });
    }
    try {
        const { totaldiscount, couponexpiry, coupontext, applicablefor } = req.body;
        const query = `
            INSERT INTO CouponCode ( CouponCode, Discount, ExpiryDate, ApplicableFor)
            VALUES (?, ?, ?, ?)
        `;
         await db.query(query, [coupontext, totaldiscount, couponexpiry, applicablefor]);

        return res.status(201).json({ message: 'Coupon added successfully' });
    } catch (error) {
        return res.status(400).json({ message: "Missing body" });
    }
}