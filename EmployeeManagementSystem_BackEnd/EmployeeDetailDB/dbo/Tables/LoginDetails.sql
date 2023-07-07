CREATE TABLE [dbo].[LoginDetails] (
    [EmployeeId] INT         IDENTITY (1, 1) NOT NULL,
    [UserName]   NCHAR (100) NULL,
    [password]   NCHAR (16)  NULL,
    CONSTRAINT [PK_LoginDetail] PRIMARY KEY CLUSTERED ([EmployeeId] ASC)
);

