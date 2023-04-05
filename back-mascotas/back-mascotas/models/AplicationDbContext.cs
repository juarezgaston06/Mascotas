using Microsoft.EntityFrameworkCore;
namespace back_mascotas.models
{
    public class AplicationDbContext: DbContext
    {
        public AplicationDbContext(DbContextOptions<AplicationDbContext> options) : base(options) { }

        public DbSet<Mascota> Mascotas { get; set; }
    }
}
