import { useQuery } from "@tanstack/react-query";
import { getCategoryBySlug } from "@/api/category";

export function useCategory(slug: string) {
    return useQuery({
        queryKey: ["category", slug],
        queryFn: () => getCategoryBySlug(slug),
        enabled: !!slug, // prevents firing query with empty slug
    });
}
