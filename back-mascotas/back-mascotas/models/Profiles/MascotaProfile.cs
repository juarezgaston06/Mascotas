using AutoMapper;
using back_mascotas.models.dto;

namespace back_mascotas.models.Profiles
{
    public class MascotaProfile : Profile
    {
        public MascotaProfile() 
        {
            CreateMap<Mascota, MascotaDTO>();
            CreateMap<MascotaDTO, Mascota>();
        }

    }
}
