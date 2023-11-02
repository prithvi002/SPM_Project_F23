-- Users Sample Data
INSERT INTO User (
        Username,
        Password,
        Email,
        FirstName,
        LastName,
        UserRole
    )
VALUES (
        'jane_doe',
        'password123',
        'jane.doe@example.com',
        'Jane',
        'Doe',
        'regular'
    ),
    (
        'john_smith',
        'password456',
        'john.smith@example.com',
        'John',
        'Smith',
        'regular'
    ),
    (
        'alice_jones',
        'password789',
        'alice.jones@example.com',
        'Alice',
        'Jones',
        'admin'
    ),
    (
        'bob_martin',
        'password012',
        'bob.martin@example.com',
        'Bob',
        'Martin',
        'regular'
    ),
    (
        'charlie_clark',
        'password345',
        'charlie.clark@example.com',
        'Charlie',
        'Clark',
        'regular'
    );
-- Airports Sample Data
INSERT INTO Airports (AirportCode, AirportName, City, Country)
VALUES (
        'JFK',
        'John F. Kennedy International Airport',
        'New York',
        'USA'
    ),
    (
        'DEL',
        'Indira Gandhi International Airport',
        'Delhi',
        'India'
    ),
    ('HND', 'Tokyo Haneda Airport', 'Tokyo', 'Japan'),
    ('LHR', 'London Heathrow Airport', 'London', 'UK'),
    (
        'DXB',
        'Dubai International Airport',
        'Dubai',
        'UAE'
    ),
    (
        'SFO',
        'San Francisco International Airport',
        'San Francisco',
        'USA'
    ),
    (
        'CDG',
        'Charles de Gaulle Airport',
        'Paris',
        'France'
    ),
    (
        'SYD',
        'Sydney Kingsford Smith Airport',
        'Sydney',
        'Australia'
    ),
    (
        'BOM',
        'Chhatrapati Shivaji Maharaj International Airport',
        'Mumbai',
        'India'
    ),
    (
        'SIN',
        'Changi Airport',
        'Singapore',
        'Singapore'
    );
-- Flights Sample Data
INSERT INTO Flight (
        Airline,
        DepartureAirportID,
        ArrivalAirportID,
        DepartureDate,
        ArrivalDate,
        Price,
        AvailableSeats,
        FlightCode,
        FlightDuration
    )
VALUES (
        'Air India',
        2,
        1,
        NOW(),
        DATE_ADD(NOW(), INTERVAL 15 HOUR),
        500.00,
        50,
        'AI101',
        '15:00:00'
    ),
    (
        'British Airways',
        4,
        1,
        NOW(),
        DATE_ADD(NOW(), INTERVAL 7 HOUR),
        300.00,
        40,
        'BA202',
        '07:00:00'
    ),
    (
        'Delta Airlines',
        1,
        7,
        NOW(),
        DATE_ADD(NOW(), INTERVAL 11 HOUR),
        450.00,
        30,
        'DA303',
        '11:00:00'
    ),
    (
        'Emirates',
        5,
        3,
        NOW(),
        DATE_ADD(NOW(), INTERVAL 10 HOUR),
        600.00,
        60,
        'EM404',
        '10:00:00'
    ),
    (
        'Qantas',
        8,
        7,
        NOW(),
        DATE_ADD(NOW(), INTERVAL 11 HOUR),
        440.00,
        55,
        'QA505',
        '11:00:00'
    ),
    (
        'Air India',
        2,
        5,
        NOW(),
        DATE_ADD(NOW(), INTERVAL 4 HOUR),
        420.00,
        40,
        'AI106',
        '04:00:00'
    ),
    (
        'British Airways',
        4,
        6,
        NOW(),
        DATE_ADD(NOW(), INTERVAL 12 HOUR),
        460.00,
        45,
        'BA207',
        '12:00:00'
    ),
    (
        'Delta Airlines',
        1,
        8,
        NOW(),
        DATE_ADD(NOW(), INTERVAL 13 HOUR),
        480.00,
        30,
        'DA308',
        '13:00:00'
    ),
    (
        'Emirates',
        5,
        4,
        NOW(),
        DATE_ADD(NOW(), INTERVAL 7 HOUR),
        320.00,
        50,
        'EM409',
        '07:00:00'
    ),
    (
        'Qantas',
        8,
        7,
        NOW(),
        DATE_ADD(NOW(), INTERVAL 11 HOUR),
        440.00,
        55,
        'QA510',
        '11:00:00'
    ),
    (
        'Air Asia',
        9,
        10,
        NOW(),
        DATE_ADD(NOW(), INTERVAL 2 HOUR),
        210.00,
        60,
        'AA601',
        '02:00:00'
    ),
    (
        'Jet Airways',
        3,
        9,
        NOW(),
        DATE_ADD(NOW(), INTERVAL 8 HOUR),
        400.00,
        40,
        'JA701',
        '08:00:00'
    ),
    (
        'Ryanair',
        6,
        1,
        NOW(),
        DATE_ADD(NOW(), INTERVAL 5 HOUR),
        250.00,
        70,
        'RY801',
        '05:00:00'
    ),
    (
        'Air France',
        7,
        3,
        NOW(),
        DATE_ADD(NOW(), INTERVAL 9 HOUR),
        430.00,
        65,
        'AF901',
        '09:00:00'
    ),
    (
        'Lufthansa',
        10,
        2,
        NOW(),
        DATE_ADD(NOW(), INTERVAL 10 HOUR),
        450.00,
        35,
        'LH1001',
        '10:00:00'
    ),
    (
        'SAS',
        1,
        9,
        NOW(),
        DATE_ADD(NOW(), INTERVAL 12 HOUR),
        460.00,
        50,
        'SAS1101',
        '12:00:00'
    ),
    (
        'Air New Zealand',
        2,
        8,
        NOW(),
        DATE_ADD(NOW(), INTERVAL 14 HOUR),
        470.00,
        45,
        'ANZ1201',
        '14:00:00'
    ),
    (
        'Cathay Pacific',
        3,
        7,
        NOW(),
        DATE_ADD(NOW(), INTERVAL 6 HOUR),
        390.00,
        60,
        'CP1301',
        '06:00:00'
    ),
    (
        'KLM',
        4,
        6,
        NOW(),
        DATE_ADD(NOW(), INTERVAL 8 HOUR),
        420.00,
        55,
        'KLM1401',
        '08:00:00'
    ),
    (
        'Swiss Air',
        5,
        5,
        NOW(),
        DATE_ADD(NOW(), INTERVAL 3 HOUR),
        330.00,
        40,
        'SA1501',
        '03:00:00'
    ),
    (
        'Turkish Airlines',
        6,
        4,
        NOW(),
        DATE_ADD(NOW(), INTERVAL 5 HOUR),
        380.00,
        35,
        'TA1601',
        '05:00:00'
    ),
    (
        'Japan Airlines',
        7,
        3,
        NOW(),
        DATE_ADD(NOW(), INTERVAL 9 HOUR),
        410.00,
        50,
        'JAL1701',
        '09:00:00'
    ),
    (
        'Aeroflot',
        8,
        2,
        NOW(),
        DATE_ADD(NOW(), INTERVAL 11 HOUR),
        430.00,
        45,
        'AFL1801',
        '11:00:00'
    ),
    (
        'Iberia',
        9,
        1,
        NOW(),
        DATE_ADD(NOW(), INTERVAL 13 HOUR),
        450.00,
        40,
        'IB1901',
        '13:00:00'
    ),
    (
        'Aer Lingus',
        10,
        10,
        NOW(),
        DATE_ADD(NOW(), INTERVAL 2 HOUR),
        320.00,
        50,
        'AL2001',
        '02:00:00'
    ),
    (
        'Thai Airways',
        1,
        3,
        NOW(),
        DATE_ADD(NOW(), INTERVAL 14 HOUR),
        490.00,
        45,
        'TA2101',
        '14:00:00'
    ),
    (
        'Eva Air',
        2,
        4,
        NOW(),
        DATE_ADD(NOW(), INTERVAL 6 HOUR),
        410.00,
        60,
        'EA2201',
        '06:00:00'
    ),
    (
        'Qatar Airways',
        3,
        6,
        NOW(),
        DATE_ADD(NOW(), INTERVAL 8 HOUR),
        440.00,
        55,
        'QR2301',
        '08:00:00'
    ),
    (
        'Norwegian',
        4,
        5,
        NOW(),
        DATE_ADD(NOW(), INTERVAL 4 HOUR),
        370.00,
        40,
        'NO2401',
        '04:00:00'
    ),
    (
        'Garuda Indonesia',
        5,
        7,
        NOW(),
        DATE_ADD(NOW(), INTERVAL 7 HOUR),
        400.00,
        35,
        'GI2501',
        '07:00:00'
    );
-- Booking Sample Data
INSERT INTO Booking (
        UserID,
        FlightID,
        NumPassengers,
        TotalPrice,
        Status
    )
VALUES (1, 1, 2, 1000.00, 'booked'),
    (2, 3, 1, 450.00, 'booked'),
    (3, 4, 3, 1800.00, 'booked'),
    (4, 5, 1, 350.00, 'booked'),
    (5, 2, 4, 1200.00, 'canceled');
-- CouponCode Sample Data
INSERT INTO CouponCode (
        CouponCode,
        DiscountPercentage,
        ExpiryDate,
        MaxUsageCount
    )
VALUES (
        'SAVE10',
        10.00,
        DATE_ADD(NOW(), INTERVAL 30 DAY),
        100
    ),
    (
        'BIGSALE',
        20.00,
        DATE_ADD(NOW(), INTERVAL 15 DAY),
        50
    ),
    (
        'FLYHIGH',
        15.00,
        DATE_ADD(NOW(), INTERVAL 45 DAY),
        75
    ),
    (
        'EARLYBIRD',
        5.00,
        DATE_ADD(NOW(), INTERVAL 60 DAY),
        150
    );
-- Notifications Sample Data
INSERT INTO Notifications (UserRole, Message)
VALUES ('regular', 'Check out our latest flight deals!'),
    ('admin', 'Maintenance scheduled for tomorrow.'),
    ('regular', 'New coupon codes are now available!'),
    (
        'regular',
        'Special discounts on select routes this month.'
    ),
    (
        'admin',
        'New update for the booking system will be deployed next week.'
    );
