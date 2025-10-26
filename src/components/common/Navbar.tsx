import React from "react";
import { Menu } from "lucide-react";

interface Props {
  onNavigate: (page: string) => void;
  showAuthButtons?: boolean;
}

export const Navbar: React.FC<Props> = ({
  onNavigate,
  showAuthButtons = true,
}) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold text-blue-600">Trackit</div>

          {showAuthButtons ? (
            <div className="hidden md:flex gap-4">
              <button
                onClick={() => onNavigate("login")}
                className="px-4 py-2 text-gray-700 hover:text-blue-600"
              >
                Login
              </button>
              <button
                onClick={() => onNavigate("signup")}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Get Started
              </button>
            </div>
          ) : (
            <div className="hidden md:flex" />
          )}

          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => onNavigate("login")}
              className="block w-full text-left px-4 py-2 text-gray-700"
            >
              Login
            </button>
            <button
              onClick={() => onNavigate("signup")}
              className="block w-full px-4 py-2 bg-blue-600 text-white rounded-lg"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
