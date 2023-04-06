using Microsoft.EntityFrameworkCore;

namespace back_mascotas.models.Repository
{
    public class MascotaRepository: IMascotaRepository
    {
        private readonly AplicationDbContext _context;
        public MascotaRepository(AplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Mascota> AddMascota(Mascota mascota)
        {
            _context.Add(mascota);
            await _context.SaveChangesAsync();
            return mascota;
        }

        public async Task Delete(Mascota mascota)
        {
            _context.Mascotas.Remove(mascota);
            await _context.SaveChangesAsync();
        }

        public async Task<List<Mascota>> GetListaMascota()
        {
            return await _context.Mascotas.ToListAsync();
        }

        public async Task<Mascota> GetMascota(int id)
        {
            return await _context.Mascotas.FindAsync(id);
        }

        public async Task ModificarMascota(Mascota mascota)
        {

            var mascotaItem = await _context.Mascotas.FindAsync(mascota.Id);

            if(mascotaItem != null)
            {
                mascotaItem.Nombre = mascota.Nombre;
                mascotaItem.Peso = mascota.Peso;
                mascotaItem.Raza = mascota.Raza;
                mascotaItem.Color = mascota.Color;
                mascotaItem.Edad = mascota.Edad;
                await _context.SaveChangesAsync();
            }

        }
    }
}
