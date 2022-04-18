using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeeManagementSystem.models
{
    public class EmployeeDetail
    {
       [Key]
        public int EmployeeId { get; set; }

        [Column(TypeName ="nvarchar(100)")]
        public string EmployeeName { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string EmailId { get; set; }

        [Column(TypeName = "nvarchar(16)")]
        public string ContactNo { get; set; }

        [Column(TypeName = "nvarchar(20)")]
        public string Domain{ get; set; }

        [Column(TypeName = "nvarchar(20)")]
        public string Experience { get; set; }

        [Column(TypeName = "nvarchar(20)")]
        public string Salary{ get; set; }
    }

   
}
