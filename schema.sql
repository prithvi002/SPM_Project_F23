-- User Table
CREATE TABLE User (
    UserID INT AUTO_INCREMENT PRIMARY KEY,
    Username VARCHAR(255) NOT NULL,
    Password VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    RegistrationDate DATETIME,
    LastLoginDate DATETIME,
    UserRole ENUM('regular', 'admin')
);
-- Flight Table
CREATE TABLE Flight (
    FlightID INT AUTO_INCREMENT PRIMARY KEY,
    Airline VARCHAR(100) NOT NULL,
    DepartureCity VARCHAR(100) NOT NULL,
    ArrivalCity VARCHAR(100) NOT NULL,
    DepartureDate DATETIME,
    ArrivalDate DATETIME,
    Price DECIMAL(10, 2),
    AvailableSeats INT,
    FlightCode VARCHAR(20),
    FlightDuration TIME,
);
-- Booking Table
CREATE TABLE Booking (
    BookingID INT AUTO_INCREMENT PRIMARY KEY,
    UserID INT FOREIGN KEY,
    FlightID INT FOREIGN KEY,
    BookingDate DATETIME,
    NumPassengers INT,
    TotalPrice DECIMAL(10, 2),
    Status ENUM('booked', 'canceled'),
    FOREIGN KEY (UserID) REFERENCES User(UserID),
    FOREIGN KEY (FlightID) REFERENCES Flight(FlightID)
);
-- Coupon Code Table
CREATE TABLE CouponCode (
    CouponCodeID INT AUTO_INCREMENT PRIMARY KEY,
    CouponCode VARCHAR(20) NOT NULL,
    DiscountPercentage DECIMAL(5, 2) NOT NULL,
    ExpiryDate DATE,
    MaxUsageCount INT,
    CurrentUsageCount INT
);
-- Notifications Table
CREATE TABLE Notifications (
    NotificationID INT AUTO_INCREMENT PRIMARY KEY,
    UserRole ENUM('regular', 'admin'),
    Message TEXT,
    Timestamp DATETIME,
);
-- Google Analytics Table
CREATE TABLE GoogleAnalytics (
    AnalyticsID INT AUTO_INCREMENT PRIMARY KEY,
    UserID INT,
    Timestamp DATETIME,
    Data JSON,
    FOREIGN KEY (UserID) REFERENCES User(UserID)
);
-- Session Table
CREATE TABLE Session (
    SessionID INT AUTO_INCREMENT PRIMARY KEY,
    UserID INT,
    SessionToken VARCHAR(255),
    ExpiryDate DATETIME,
    IPAddress VARCHAR(45),
    FOREIGN KEY (UserID) REFERENCES User(UserID)
);
