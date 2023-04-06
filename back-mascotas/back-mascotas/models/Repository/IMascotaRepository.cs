namespace back_mascotas.models.Repository
{
    public interface IMascotaRepository
    {
        Task<List<Mascota>> GetListaMascota();
        Task<Mascota> GetMascota(int id);
        Task Delete(Mascota mascota);
        Task<Mascota> AddMascota(Mascota mascota);
        Task ModificarMascota(Mascota mascota);
    }
}
