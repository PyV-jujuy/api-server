import type PersonDto from '../dto/PersonDto'
import type PersonRepositoryDto from '../dto/PersonRepositoryDto'

export default function (PersonRepositoryDTO: PersonRepositoryDto): PersonDto {
  const person = PersonRepositoryDTO
  return {
    typeDoc: person.tipodoc,
    matricule: person.matricula,
    firstName: person.padronmf_nombre,
    class: person.clase,
    lastName: person.apellido,
    address: person.domicilio,
    sex: person.sexo,
    order: person.orden,
    circuitCode: person.circuito_codigo,
    circuitName: person.circuito_nombre,
    municipalityCode: person.municip_codigo,
    municipalityName: person.municip_nombre,
    sectionCode: person.seccion_codigo,
    sectionName: person.seccion_nombre,
    number: person.numero,
    school: person.escuela,
    direction: person.direccion,
    place: person.lugar,
  }
}
