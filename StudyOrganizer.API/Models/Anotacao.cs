namespace StudyOrganizer.API.Models
{
    public class Anotacao
    {
        public int Id { get; set; }
        public int MateriaId { get; set; }
        public string Titulo { get; set; } = string.Empty;
        public string? Conteudo { get; set; }
        public DateTime CriadoEm { get; set; } = DateTime.Now;
        public DateTime AtualizadoEm { get; set; } = DateTime.Now;
        public Materia Materia { get; set; } = null!;
    }
}