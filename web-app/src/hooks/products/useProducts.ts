import { getProducts } from "@/services"
import { useAccountStore } from "@/state-manager";
import { useQuery } from "@tanstack/react-query"

export const useProducts = () => {
    const account = useAccountStore((state) => state.account);
    const { isLoading, data: products } = useQuery({
        queryKey: ["products"],
        queryFn: () => getProducts(account.id!)
    });

    return { isLoading, products }
}