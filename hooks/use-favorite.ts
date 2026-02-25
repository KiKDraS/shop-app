import { startTransition, useOptimistic, useState } from "react";

export function useFavorite(initialFavoriteStatus: boolean = false) {
  const [isFavorite, setIsFavorite] = useState(initialFavoriteStatus);

  const [optimisticFavorite, addOptimisticFavorite] = useOptimistic(
    isFavorite,
    (_, optimisticValue: boolean) => optimisticValue,
  );

  const modifyFavoriteStatusOnServer = async (
    productId: string,
    nextValue: boolean,
  ) => {
    try {
      console.log(
        `Guardando favorito en DB... ID: ${productId}, Estado: ${nextValue}`,
      );

      await new Promise((resolve) => setTimeout(resolve, 800));

      startTransition(() => {
        setIsFavorite(nextValue);
      });
    } catch (error) {
      console.error("Error al guardar en DB", error);
    }
  };

  const toggleFavorite = (productId: string) => {
    const nextValue = !optimisticFavorite;

    startTransition(() => {
      addOptimisticFavorite(nextValue);
    });

    modifyFavoriteStatusOnServer(productId, nextValue);
  };

  return {
    isFavorite: optimisticFavorite,
    toggleFavorite,
  };
}
