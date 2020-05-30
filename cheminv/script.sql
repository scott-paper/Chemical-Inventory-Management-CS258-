CREATE TABLE User(
  UserID VARCHAR(10),
  Username VARCHAR(25),
  Password VARCHAR(10),
  Admin INTEGER,
  PRIMARY KEY(UserID)
)

CREATE TABLE Inventory(
  Serial INT NOT NULL,
  Item_Name VARCHAR(20) NOT NULL,
  Vendor VARCHAR(20),
  Catalog_No VARCHAR(20),
  Owner VARCHAR(20),
  Location VARCHAR(20),
  Sub-location VARCHAR(20),
  Location Details VARCHAR(30),
  Price INT,
  Stock INT,
  Unit_Size VARCHAR(20),
  URL VARCHAR(20),
  Technical_Details VARCHAR(20),
  Expiration_Date DATE,
  Lot_No VARCHAR(20),
  CAS_No VARCHAR(20),
  Created_By VARCHAR(20),
  Alternate_Name VARCHAR(20),
  Bottle_Reference VARCHAR(20),
  Date_Opened VARCHAR(20),
  Formula VARCHAR(20),
  Lifespan VARCHAR(20),
  Molecular_Weight VARCHAR(20),
  Physical_State VARCHAR(20),
  Purity VARCHAR(20),
  PRIMARY KEY(Serial)
)
