namespace StudyOrganizer.API.Models
{
    public class Cronograma
    {
        public int Id { get; set; }
        public int MateriaId { get; set; }
        public int DiaSemana { get; set; }
        public TimeOnly HoraInicio { get; set; }
        public TimeOnly HoraFim { get; set; }
        public DateTime CriadoEm { get; set; } = DateTime.Now;
        public Materia Materia { get; set; } = null!;
    }
}