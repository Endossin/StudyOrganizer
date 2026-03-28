namespace StudyOrganizer.API.Models
{
    public class Materia
    {
        public int Id { get; set; }
        public string Nome { get; set; } = string.Empty;
        public string? Descricao { get; set; }
        public string? Cor { get; set; }
        public DateTime CriadoEm { get; set; } = DateTime.Now;

        public ICollection<Tarefa> Tarefas { get; set; } = new List<Tarefa>();
        public ICollection<Cronograma> Cronogramas { get; set; } = new List<Cronograma>();
        public ICollection<SessaoPomodoro> SessoesPomodoro { get; set; } = new List<SessaoPomodoro>();
        public ICollection<Anotacao> Anotacoes { get; set; } = new List<Anotacao>();
        public ICollection<Progresso> Progressos { get; set; } = new List<Progresso>();
    }
}