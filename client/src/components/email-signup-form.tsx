import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Mail, Loader2, CheckCircle } from "lucide-react";

export default function EmailSignupForm() {
  const [email, setEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const { toast } = useToast();

  const signupMutation = useMutation({
    mutationFn: async (email: string) => {
      const response = await apiRequest("POST", "/api/newsletter-signup", { email });
      return response.json();
    },
    onSuccess: (data) => {
      setShowSuccess(true);
      setEmail("");
      toast({
        title: "¡Perfecto!",
        description: data.message,
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Hubo un problema. Por favor, intenta nuevamente.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      signupMutation.mutate(email);
    }
  };

  if (showSuccess) {
    return (
      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 max-w-md mx-auto">
        <CheckCircle className="h-12 w-12 text-white mx-auto mb-4" />
        <h3 className="text-white text-xl font-bold mb-2">¡Perfecto!</h3>
        <p className="text-white/90">Te hemos agregado a nuestra lista. Te contactaremos pronto con noticias emocionantes.</p>
      </div>
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
        <div className="flex flex-col sm:flex-row gap-4">
          <Input
            type="email"
            placeholder="tu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-6 py-4 text-gray-900 placeholder-gray-500 border-0 focus:ring-4 focus:ring-white/25"
          />
          <Button 
            type="submit"
            disabled={signupMutation.isPending}
            className="bg-travel-coral text-white px-8 py-4 font-semibold hover:bg-travel-coral/90 transition-colors whitespace-nowrap"
          >
            {signupMutation.isPending ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                <Mail className="mr-2 h-5 w-5" />
                Mantenerme informado
              </>
            )}
          </Button>
        </div>
      </form>
      
      <p className="text-white/70 text-sm">
        No compartimos tu información. Puedes cancelar tu suscripción en cualquier momento.
      </p>
    </>
  );
}
