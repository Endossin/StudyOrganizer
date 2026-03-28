using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StudyOrganizer.API.Data;
using StudyOrganizer.API.Models;

namespace StudyOrganizer.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AnotacoesController : ControllerBase
    {
        private readonly AppDbContext _context;
        public AnotacoesController(AppDbContext context) => _context = context;

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Anotacao>>> GetAll() =>
            await _context.Anotacoes.Include(a => a.Materia).ToListAsync();

        [HttpGet("{id}")]
        public async Task<ActionResult<Anotacao>> GetById(int id)
        {
            var anotacao = await _context.Anotacoes.Include(a => a.Materia).FirstOrDefaultAsync(a => a.Id == id);
            return anotacao == null ? NotFound() : Ok(anotacao);
        }

        [HttpPost]
        public async Task<ActionResult<Anotacao>> Create(Anotacao anotacao)
        {
            _context.Anotacoes.Add(anotacao);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetById), new { id = anotacao.Id }, anotacao);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, Anotacao anotacao)
        {
            if (id != anotacao.Id) return BadRequest();
            anotacao.AtualizadoEm = DateTime.Now;
            _context.Entry(anotacao).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var anotacao = await _context.Anotacoes.FindAsync(id);
            if (anotacao == null) return NotFound();
            _context.Anotacoes.Remove(anotacao);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}