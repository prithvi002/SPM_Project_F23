-- User Table
CREATE TABLE User (
    UserID INT AUTO_INCREMENT PRIMARY KEY,
    Username VARCHAR(255) NOT NULL UNIQUE,
    Password VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL UNIQUE,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    RegistrationDate DATETIME DEFAULT CURRENT_TIMESTAMP,
    LastLoginDate DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UserRole ENUM('regular', 'admin') DEFAULT 'regular'
);
-- Airports Table
CREATE TABLE Airports (
    AirportID INT AUTO_INCREMENT PRIMARY KEY,
    AirportCode VARCHAR(20) NOT NULL UNIQUE,
    AirportName VARCHAR(255) NOT NULL,
    City VARCHAR(100) NOT NULL,
    Country VARCHAR(100) NOT NULL
);
-- Flight Table
CREATE TABLE Flight (
    FlightID INT AUTO_INCREMENT PRIMARY KEY,
    Airline VARCHAR(100) NOT NULL,
    DepartureAirportID INT NOT NULL,
    ArrivalAirportID INT NOT NULL,
    DepartureDate DATETIME,
    ArrivalDate DATETIME,
    Price DECIMAL(10, 2),
    AvailableSeats INT,
    FlightCode VARCHAR(20) NOT NULL UNIQUE,
    FlightDuration TIME,
    FOREIGN KEY (DepartureAirportID) REFERENCES Airports(AirportID),
    FOREIGN KEY (ArrivalAirportID) REFERENCES Airports(AirportID)
);
-- Booking Table
CREATE TABLE Booking (
    BookingID INT AUTO_INCREMENT PRIMARY KEY,
    UserID INT NOT NULL,
    FlightID INT NOT NULL,
    BookingDate DATETIME DEFAULT CURRENT_TIMESTAMP,
    NumPassengers INT,
    TotalPrice DECIMAL(10, 2),
    Status ENUM('booked', 'canceled') DEFAULT 'booked',
    FOREIGN KEY (UserID) REFERENCES User(UserID),
    FOREIGN KEY (FlightID) REFERENCES Flight(FlightID)
);
-- Coupon Code Table
CREATE TABLE CouponCode (
    CouponCodeID INT AUTO_INCREMENT PRIMARY KEY,
    CouponCode VARCHAR(20) NOT NULL UNIQUE,
    DiscountPercentage DECIMAL(5, 2) NOT NULL,
    ExpiryDate DATE,
    ApplicableFor VARCHAR(1000),
    MaxUsageCount INT,
    CurrentUsageCount INT DEFAULT 0
);
-- Notifications Table
CREATE TABLE Notifications (
    NotificationID INT AUTO_INCREMENT PRIMARY KEY,
    UserRole ENUM('regular', 'admin') DEFAULT 'regular',
    Message TEXT NOT NULL,
    Timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
);
