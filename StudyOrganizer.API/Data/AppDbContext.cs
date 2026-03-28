using Microsoft.EntityFrameworkCore;
using StudyOrganizer.API.Models;

namespace StudyOrganizer.API.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Materia> Materias { get; set; }
        public DbSet<Tarefa> Tarefas { get; set; }
        public DbSet<Cronograma> Cronogramas { get; set; }
        public DbSet<SessaoPomodoro> SessoesPomodoro { get; set; }
        public DbSet<Anotacao> Anotacoes { get; set; }
        public DbSet<Progresso> Progressos { get; set; }
    }
}