
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreditCard, Shield, Zap, CheckCircle } from "lucide-react";
import { useCart } from "../cart/CartProvider";

const PaymentGateway = () => {
  const [selectedMethod, setSelectedMethod] = useState('razorpay');
  const [cardDetails, setCardDetails] = useState({
    number: '',
    expiry: '',
    cvv: '',
    name: ''
  });
  const { getTotalPrice, items } = useCart();

  const processPayment = () => {
    console.log('Processing payment via', selectedMethod);
    console.log('Payment details:', { selectedMethod, cardDetails, amount: getTotalPrice() });
    
    // Simulate payment processing
    setTimeout(() => {
      alert('Payment successful! Thank you for your purchase.');
    }, 2000);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(price);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <CreditCard className="w-16 h-16 text-pink-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Secure Payment</h1>
          <p className="text-gray-600">Complete your purchase safely and securely</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
              <CardDescription>Review your selected services</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center p-3 border rounded">
                    <div>
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-sm text-gray-600">{item.description}</p>
                      {item.tier && (
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded">{item.tier}</span>
                      )}
                    </div>
                    <span className="font-semibold">{formatPrice(item.price)}</span>
                  </div>
                ))}
                
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>Total Amount:</span>
                    <span className="text-pink-600">{formatPrice(getTotalPrice())}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Methods */}
          <Card>
            <CardHeader>
              <CardTitle>Payment Method</CardTitle>
              <CardDescription>Choose your preferred payment option</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="online" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="online">Online Payment</TabsTrigger>
                  <TabsTrigger value="emi">EMI Options</TabsTrigger>
                </TabsList>

                <TabsContent value="online" className="space-y-6">
                  <RadioGroup value={selectedMethod} onValueChange={setSelectedMethod}>
                    <div className="flex items-center space-x-2 p-4 border rounded hover:bg-gray-50">
                      <RadioGroupItem value="razorpay" id="razorpay" />
                      <Label htmlFor="razorpay" className="flex-1 cursor-pointer">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">Razorpay</h4>
                            <p className="text-sm text-gray-600">UPI, Cards, Net Banking, Wallets</p>
                          </div>
                          <div className="text-blue-600 font-bold">Recommended</div>
                        </div>
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2 p-4 border rounded hover:bg-gray-50">
                      <RadioGroupItem value="paypal" id="paypal" />
                      <Label htmlFor="paypal" className="flex-1 cursor-pointer">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">PayPal</h4>
                            <p className="text-sm text-gray-600">International payments accepted</p>
                          </div>
                          <Shield className="w-5 h-5 text-blue-600" />
                        </div>
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2 p-4 border rounded hover:bg-gray-50">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card" className="flex-1 cursor-pointer">
                        <div>
                          <h4 className="font-medium">Credit/Debit Card</h4>
                          <p className="text-sm text-gray-600">Visa, Mastercard, RuPay accepted</p>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>

                  {selectedMethod === 'card' && (
                    <div className="space-y-4 p-4 bg-gray-50 rounded">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-2">
                          <Label>Card Number</Label>
                          <Input
                            value={cardDetails.number}
                            onChange={(e) => setCardDetails({...cardDetails, number: e.target.value})}
                            placeholder="1234 5678 9012 3456"
                          />
                        </div>
                        <div>
                          <Label>Expiry Date</Label>
                          <Input
                            value={cardDetails.expiry}
                            onChange={(e) => setCardDetails({...cardDetails, expiry: e.target.value})}
                            placeholder="MM/YY"
                          />
                        </div>
                        <div>
                          <Label>CVV</Label>
                          <Input
                            value={cardDetails.cvv}
                            onChange={(e) => setCardDetails({...cardDetails, cvv: e.target.value})}
                            placeholder="123"
                          />
                        </div>
                        <div className="col-span-2">
                          <Label>Cardholder Name</Label>
                          <Input
                            value={cardDetails.name}
                            onChange={(e) => setCardDetails({...cardDetails, name: e.target.value})}
                            placeholder="John Doe"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="emi" className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-4 border rounded hover:bg-gray-50 cursor-pointer">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-medium">3 Months EMI</h4>
                          <p className="text-sm text-gray-600">₹{(getTotalPrice() / 3).toFixed(0)}/month</p>
                        </div>
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                    </div>
                    
                    <div className="p-4 border rounded hover:bg-gray-50 cursor-pointer">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-medium">6 Months EMI</h4>
                          <p className="text-sm text-gray-600">₹{(getTotalPrice() / 6).toFixed(0)}/month</p>
                        </div>
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                    </div>
                    
                    <div className="p-4 border rounded hover:bg-gray-50 cursor-pointer">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-medium">12 Months EMI</h4>
                          <p className="text-sm text-gray-600">₹{(getTotalPrice() / 12).toFixed(0)}/month</p>
                        </div>
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="mt-6 space-y-4">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Shield className="w-4 h-4" />
                  <span>256-bit SSL encryption ensures your payment is secure</span>
                </div>
                
                <Button 
                  onClick={processPayment}
                  className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600"
                  size="lg"
                >
                  <Zap className="w-4 h-4 mr-2" />
                  Pay {formatPrice(getTotalPrice())} Securely
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PaymentGateway;
