using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StudyOrganizer.API.Data;
using StudyOrganizer.API.Models;

namespace StudyOrganizer.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MateriasController : ControllerBase
    {
        private readonly AppDbContext _context;
        public MateriasController(AppDbContext context) => _context = context;

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Materia>>> GetAll() =>
            await _context.Materias.ToListAsync();

        [HttpGet("{id}")]
        public async Task<ActionResult<Materia>> GetById(int id)
        {
            var materia = await _context.Materias.FindAsync(id);
            return materia == null ? NotFound() : Ok(materia);
        }

        [HttpPost]
        public async Task<ActionResult<Materia>> Create(Materia materia)
        {
            _context.Materias.Add(materia);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetById), new { id = materia.Id }, materia);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, Materia materia)
        {
            if (id != materia.Id) return BadRequest();
            _context.Entry(materia).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var materia = await _context.Materias.FindAsync(id);
            if (materia == null) return NotFound();
            _context.Materias.Remove(materia);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}