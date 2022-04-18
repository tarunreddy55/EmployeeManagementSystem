using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EmployeeManagementSystem.models;

namespace EmployeeManagementSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeDetailController : ControllerBase
    {
        private readonly EmployeeFullContext _context;

        public EmployeeDetailController(EmployeeFullContext context)
        {
            _context = context;
        }

        // GET: api/EmployeeDetail
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EmployeeDetail>>> GetEmployeeDetails()
        {
            return await _context.EmployeeDetails.ToListAsync();
        }

        //GET: api/EmployeeDetail/5
        [HttpGet("{id}")]
        public async Task<ActionResult<EmployeeDetail>> GetEmployeeDetail(int id)
        {
            var employeedetail = await _context. EmployeeDetails.FindAsync(id);

            if (employeedetail == null)
            {
                return NotFound();
            }

            return employeedetail;
        }

        // PUT: api/EmployeeDetail/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEmployeeDetail(int id, EmployeeDetail employeedetail)
        {
            if (id != employeedetail.EmployeeId)
            {
                return BadRequest();
            }

            _context.Entry(employeedetail).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmployeeDetailExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/EmployeeDetail
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<EmployeeDetail>> PostEmployeeDetail(EmployeeDetail employeedetail)
        {
            _context.EmployeeDetails.Add(employeedetail);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEmployeeDetail", new { id = employeedetail.EmployeeId }, employeedetail);
        }

        // DELETE: api/EmployeeDetail/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmployeeDetail(int id)
        {
            var employeedetail = await _context.EmployeeDetails.FindAsync(id);
            if (employeedetail == null)
            {
                return NotFound();
            }

            _context.EmployeeDetails.Remove(employeedetail);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool EmployeeDetailExists(int id)
        {
            return _context.EmployeeDetails.Any(e => e.EmployeeId == id);
        }
    }
}