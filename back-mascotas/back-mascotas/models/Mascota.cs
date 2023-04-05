﻿namespace back_mascotas.models
{
    public class Mascota
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Color { get; set; }
        public string Raza { get; set; }    
        public float Peso { get; set; }
        public int Edad { get; set; }
        public DateTime FechaCreacion { get; set; }
    }
}
