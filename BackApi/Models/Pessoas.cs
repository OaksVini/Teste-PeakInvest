using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web;

namespace Api.Models
{
    public class Pessoas
    {
        public string BuscarPessoa(int id)
        {
            var lstPessoas = new List<KeyValuePair<int, string>>();
            lstPessoas.Add(new KeyValuePair<int, string>(1, "João Martins"));
            lstPessoas.Add(new KeyValuePair<int, string>(2, "Maria Helena"));
            lstPessoas.Add(new KeyValuePair<int, string>(3, "Ana Caetano"));

            var varPessoa = lstPessoas.FirstOrDefault(x => x.Key == id);

            if (varPessoa.Value == null || varPessoa.Value == "")
            {
                return $"O ID ({id}) não foi encontrado.";
            }

            return $"{varPessoa.Value}";
        }
    }
}