SELECT FirstName, LastName, City, State
  FROM Address A
  JOIN Person P on A.PersonId = P.PersonId;
