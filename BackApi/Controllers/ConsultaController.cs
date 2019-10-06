using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using Api.Models;

namespace Api.Controllers
{
    public class ConsultaController : ApiController
    {
        Pessoas pessoa;

        public ConsultaController()
        {
            pessoa = new Pessoas();
        }

        // GET: api/Consulta/1
        [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
        public string Get(int id)
        {
            return pessoa.BuscarPessoa(id);
        }
    }
}
