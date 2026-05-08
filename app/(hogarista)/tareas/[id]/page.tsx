export default function DetalleTarea({ params }: { params: { id: string } }) {
  return <div className="p-6">Detalle tarea {params.id} — próximamente</div>;
}
