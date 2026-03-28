using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StudyOrganizer.API.Data;
using StudyOrganizer.API.Models;

namespace StudyOrganizer.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CronogramasController : ControllerBase
    {
        private readonly AppDbContext _context;
        public CronogramasController(AppDbContext context) => _context = context;

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Cronograma>>> GetAll() =>
            await _context.Cronogramas.Include(c => c.Materia).ToListAsync();

        [HttpGet("{id}")]
        public async Task<ActionResult<Cronograma>> GetById(int id)
        {
            var cronograma = await _context.Cronogramas.Include(c => c.Materia).FirstOrDefaultAsync(c => c.Id == id);
            return cronograma == null ? NotFound() : Ok(cronograma);
        }

        [HttpPost]
        public async Task<ActionResult<Cronograma>> Create(Cronograma cronograma)
        {
            _context.Cronogramas.Add(cronograma);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetById), new { id = cronograma.Id }, cronograma);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, Cronograma cronograma)
        {
            if (id != cronograma.Id) return BadRequest();
            _context.Entry(cronograma).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var cronograma = await _context.Cronogramas.FindAsync(id);
            if (cronograma == null) return NotFound();
            _context.Cronogramas.Remove(cronograma);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}