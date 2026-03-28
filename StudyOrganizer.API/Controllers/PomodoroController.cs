using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StudyOrganizer.API.Data;
using StudyOrganizer.API.Models;

namespace StudyOrganizer.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PomodoroController : ControllerBase
    {
        private readonly AppDbContext _context;
        public PomodoroController(AppDbContext context) => _context = context;

        [HttpGet]
        public async Task<ActionResult<IEnumerable<SessaoPomodoro>>> GetAll() =>
            await _context.SessoesPomodoro.Include(s => s.Materia).ToListAsync();

        [HttpGet("{id}")]
        public async Task<ActionResult<SessaoPomodoro>> GetById(int id)
        {
            var sessao = await _context.SessoesPomodoro.Include(s => s.Materia).FirstOrDefaultAsync(s => s.Id == id);
            return sessao == null ? NotFound() : Ok(sessao);
        }

        [HttpPost]
        public async Task<ActionResult<SessaoPomodoro>> Create(SessaoPomodoro sessao)
        {
            sessao.IniciadoEm = DateTime.Now;
            _context.SessoesPomodoro.Add(sessao);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetById), new { id = sessao.Id }, sessao);
        }

        [HttpPut("{id}/finalizar")]
        public async Task<IActionResult> Finalizar(int id)
        {
            var sessao = await _context.SessoesPomodoro.FindAsync(id);
            if (sessao == null) return NotFound();
            sessao.FinalizadoEm = DateTime.Now;
            sessao.Concluida = true;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var sessao = await _context.SessoesPomodoro.FindAsync(id);
            if (sessao == null) return NotFound();
            _context.SessoesPomodoro.Remove(sessao);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}