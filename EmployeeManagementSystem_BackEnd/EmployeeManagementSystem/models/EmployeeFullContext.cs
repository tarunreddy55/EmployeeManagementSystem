using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeeManagementSystem.models
{
    public class EmployeeFullContext:DbContext
    {
        public EmployeeFullContext(DbContextOptions<EmployeeFullContext>options):base(options)
        {

        }
        public DbSet<EmployeeDetail> EmployeeDetails { get; set; }

        public DbSet<LoginDetail> LoginDetails { get; set; }
    }
}
