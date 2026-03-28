namespace StudyOrganizer.API.Models
{
    public class SessaoPomodoro
    {
        public int Id { get; set; }
        public int MateriaId { get; set; }
        public int DuracaoMinutos { get; set; }
        public DateTime IniciadoEm { get; set; }
        public DateTime? FinalizadoEm { get; set; }
        public bool Concluida { get; set; } = false;
        public Materia Materia { get; set; } = null!;
    }
}