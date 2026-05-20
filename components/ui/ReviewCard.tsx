import { StarRating } from "./StarRating";

interface ReviewCardProps {
  autor_nombre:  string;
  autor_foto?:   string | null;
  especialidad?: string;
  estrellas:     number;
  comentario:    string;
  onRecontact?:  () => void;
}

export function ReviewCard({ autor_nombre, autor_foto, especialidad, estrellas, comentario, onRecontact }: ReviewCardProps) {
  const initials = autor_nombre.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();

  return (
    <div className="w-[300px] p-5 border border-[#DEE2E6] rounded-xl bg-white flex-shrink-0 relative"
         style={{ boxShadow: "var(--shadow-card)" }}>
      {/* Quote mark */}
      <span className="absolute right-4 top-1 font-display text-6xl leading-none text-[#13C296] opacity-20 select-none">"</span>

      {/* Quote */}
      <p className="text-sm text-[#373737] leading-relaxed mb-4 line-clamp-4">{comentario}</p>

      {/* Author */}
      <div className="flex items-center gap-2.5">
        <div className="w-9 h-9 rounded-full bg-[#E6F9F4] flex items-center justify-center text-[#13C296] font-display font-bold text-xs overflow-hidden flex-shrink-0">
          {autor_foto ? (
            <img src={autor_foto} alt={autor_nombre} className="w-full h-full object-cover" />
          ) : (
            initials
          )}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-display font-bold text-sm text-[#373737] truncate">{autor_nombre}</p>
          {especialidad && (
            <p className="text-xs text-[#7B7B7B] truncate">{especialidad}</p>
          )}
        </div>
        <StarRating value={estrellas} readonly size="sm" />
      </div>

      {onRecontact && (
        <button
          onClick={onRecontact}
          className="mt-3 w-full h-9 border border-[#13C296] text-[#13C296] text-xs font-medium rounded-lg hover:bg-[#E6F9F4] transition-colors"
        >
          Volver a contactar
        </button>
      )}
    </div>
  );
}
