import type PersonDto from '../dto/PersonDto'
import type PersonRepositoryDto from '../dto/PersonRepositoryDto'

export default function (p: Partial<PersonDto>): Partial<PersonRepositoryDto> {
  const partialPersonRepository: Partial<PersonRepositoryDto> = {}

  if (p.lastName !== undefined) partialPersonRepository.apellido = p.lastName
  if (p.circuitCode !== undefined)
    partialPersonRepository.circuito_codigo = p.circuitCode
  if (p.circuitName !== undefined)
    partialPersonRepository.circuito_nombre = p.circuitName
  if (p.class !== undefined) partialPersonRepository.clase = p.class
  if (p.address !== undefined) partialPersonRepository.direccion = p.address
  if (p.school !== undefined) partialPersonRepository.escuela = p.school
  if (p.place !== undefined) partialPersonRepository.lugar = p.place
  if (p.matricule !== undefined) partialPersonRepository.matricula = p.matricule
  if (p.municipalityCode !== undefined)
    partialPersonRepository.municip_codigo = p.municipalityCode
  if (p.municipalityName !== undefined)
    partialPersonRepository.municip_nombre = p.municipalityName
  if (p.number !== undefined) partialPersonRepository.numero = p.number
  if (p.order !== undefined) partialPersonRepository.orden = p.order
  if (p.sex !== undefined) partialPersonRepository.sexo = p.sex
  if (p.typeDoc !== undefined) partialPersonRepository.tipodoc = p.typeDoc

  return partialPersonRepository
}
