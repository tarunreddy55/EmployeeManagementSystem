CREATE TABLE [dbo].[EmployeeDetails] (
    [EmployeeId]   INT         IDENTITY (1, 1) NOT NULL,
    [EmployeeName] NCHAR (100) NULL,
    [EmailId]      NCHAR (100) NULL,
    [ContactNo]    NCHAR (16)  NULL,
    [Domain]       NCHAR (100) NULL,
    [Experience]   NCHAR (20)  NULL,
    [Salary]       NCHAR (20)  NULL,
    CONSTRAINT [PK_EmployeeDetail] PRIMARY KEY CLUSTERED ([EmployeeId] ASC)
);

