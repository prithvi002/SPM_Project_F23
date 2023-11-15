
import React, { useState } from 'react';

import {apiFetch} from "../api";


export default function DiscountCodes() {

    const today = new Date();
    const [hasAdded, setHasAdded] = useState(false);
    const [successMsg, setSuccessMsg] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();

       const couponCodeRequest = {
            totaldiscount: e.target.totaldiscount.value,
           couponexpiry: e.target.couponexpiry.value,
           coupontext: e.target.coupontext.value,
           applicablefor: e.target.applicablefor.value,
        };

        console.log(couponCodeRequest);
        setHasAdded(true);

        try {
            const response = await fetch("/addCouponCode", {
                method: "POST",
                mode: 'cors',
                cache: 'no-cache',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(couponCodeRequest),
                /*body: JSON.stringify({ coupontext, totaldiscount, couponexpiry, applicablefor }),*/
            });
            if(response.status === 201){
                setSuccessMsg("Coupon Added successfully");
            }


        } catch (error) {
            console.log(error);
        }

        setHasAdded(true);

    };
    return (
        <>
        <div>
            {/*<h2>Coupon Codes</h2>
            <ul>
                {codes.map((code, index) => (
                    <div className="coupon-codes" key={code.couponCodeID}>
                        <div className="flight-price">
                            <p className="flight-price">{code.couponCode}</p>
                        </div>
                        <div className="coupon-percent-details">

                        <p className="flight-airline">You will receive a discount of <span className="flight-code">{code.discountPercentage}</span> % with this coupon</p>
                        </div>
                        <div className="flight-details">
                            <p className="flight-departure">
                                Expires on {new Date(code.expiryDate).toLocaleString()}
                            </p>
                        </div>

                    </div>
                ))}
            </ul>*/}
            <h2>Provide a Coupon Codes</h2>
            <form onSubmit={handleSubmit} className="search-form">
                <label htmlFor="totaldiscount">Total Discount in whole dollars</label>
                <input
                    type="number"
                    id="totaldiscount"
                    required

                />
                <label htmlFor="couponexpiry">Expiration of the coupon</label>

                <input
                    type="date"
                    id="couponexpiry"
                    defaultValue={today.toLocaleDateString()}
                />

                <label htmlFor="coupontext">Coupon Text</label>
                <input
                    type="text"
                    id="coupontext"
                    maxLength={30}
                    required
                />
                <label htmlFor="applicablefor">Applicable for </label>
                <input
                    type="text"
                    id="applicablefor"
                />
                <input type="submit" value="Add Coupon" />
            </form>


        </div>
        <div className="successMsg">
        {hasAdded &&
                <p key="">{successMsg}</p>}
    </div>
    </>
    );
};








