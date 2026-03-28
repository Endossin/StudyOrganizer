namespace StudyOrganizer.API.Models
{
    public class Progresso
    {
        public int Id { get; set; }
        public int MateriaId { get; set; }
        public DateOnly Data { get; set; }
        public int MinutosEstudados { get; set; } = 0;
        public int TarefasConcluidas { get; set; } = 0;
        public int SessoesPomodoro { get; set; } = 0;
        public Materia Materia { get; set; } = null!;
    }
}