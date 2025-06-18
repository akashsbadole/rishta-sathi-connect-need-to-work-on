
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, X, Trash2, CreditCard } from "lucide-react";
import { useCart } from "./CartProvider";

const CartSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { items, removeFromCart, getTotalPrice, getItemCount, clearCart } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(price);
  };

  return (
    <>
      {/* Cart Toggle Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed top-1/2 right-0 transform -translate-y-1/2 bg-gradient-to-l from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 rounded-r-none rounded-l-lg shadow-lg z-40"
      >
        <ShoppingCart className="w-5 h-5 mr-2" />
        {getItemCount() > 0 && (
          <Badge className="ml-1 bg-white text-pink-500">
            {getItemCount()}
          </Badge>
        )}
      </Button>

      {/* Cart Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-96 bg-white shadow-xl">
            <Card className="h-full flex flex-col">
              <CardHeader className="bg-gradient-to-r from-pink-500 to-rose-500 text-white">
                <CardTitle className="flex items-center justify-between">
                  <span>Your Cart ({getItemCount()})</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:bg-white hover:bg-opacity-20"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="flex-1 overflow-y-auto p-0">
                {items.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full p-6 text-center">
                    <ShoppingCart className="w-16 h-16 text-gray-300 mb-4" />
                    <h3 className="text-lg font-semibold text-gray-600 mb-2">Your cart is empty</h3>
                    <p className="text-gray-500">Add verification services or wedding services to get started</p>
                  </div>
                ) : (
                  <div className="space-y-4 p-4">
                    {items.map((item) => (
                      <Card key={item.id} className="border border-gray-200">
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-semibold text-sm">{item.name}</h4>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeFromCart(item.id)}
                              className="text-red-500 hover:text-red-700 p-1"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                          <p className="text-xs text-gray-600 mb-2">{item.description}</p>
                          {item.tier && (
                            <Badge variant="secondary" className="mb-2">
                              {item.tier}
                            </Badge>
                          )}
                          {item.vendor && (
                            <p className="text-xs text-gray-500 mb-2">by {item.vendor}</p>
                          )}
                          <div className="flex justify-between items-center">
                            <Badge className="bg-green-100 text-green-800">
                              {item.type.replace('_', ' ')}
                            </Badge>
                            <span className="font-bold text-pink-600">
                              {formatPrice(item.price)}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>

              {items.length > 0 && (
                <div className="border-t p-4 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">Total:</span>
                    <span className="text-xl font-bold text-pink-600">
                      {formatPrice(getTotalPrice())}
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    <Button className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600">
                      <CreditCard className="w-4 h-4 mr-2" />
                      Proceed to Checkout
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={clearCart}
                    >
                      Clear Cart
                    </Button>
                  </div>
                </div>
              )}
            </Card>
          </div>
        </div>
      )}
    </>
  );
};

export default CartSidebar;
