import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isMenuOpen: boolean;
}

export default function MobileMenu({ isMenuOpen }: MobileMenuProps) {
  // to-do: name aplication menu y hacer responsive
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const [isLanguagesOpen, setIsLanguagesOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("Spanish");

  const languages = [
    "English",
    "Spanish",
    "Français",
    "German",
    "Russian",
    "Chinese",
    "Dutch",
    "Swedish",
    "Swedish",
  ];

  return (
    <>
      <div
        className={cn(
          "absolute top-0 right-0 bg-white z-10 w-full h-0 overflow-hidden transition-all duration-500",
          isMenuOpen && "h-screen",
        )}
      >
        <div className="py-1">
          <div className="flex justify-between items-center p-4 py-6 border-b-[1px] border-divider">
            <div className="flex justify-between hover:cursor-pointer">
              <img className="mr-2" src="/ContactIcon.png" />
              <h1 className="font-semibold text-sm leading-5 text-deep-blue">
                CONTACT
              </h1>
            </div>
            <div
              className="hover:cursor-pointer"
              onClick={() => setIsContactOpen(!isContactOpen)}
            >
              <img src="/Path.png" />
            </div>
          </div>
          {isContactOpen && (
            <>
              <div className="p-2 px-6 text-grey8-dark-text bg-grey1 border-b-[1px] border-divider font-normal leading-6 text-base">
                + 34 123 456 789
              </div>
              <div className="p-2 px-6 text-grey8-dark-text bg-grey1 border-b-[1px] border-divider font-normal leading-6 text-base">
                support@axa-support.com
              </div>
            </>
          )}
          <div className="flex justify-between items-center p-4 py-6 border-b-[1px] border-divider">
            <div className="flex justify-between hover:cursor-pointer">
              <img className="mr-2" src="/LanguagesIcon.png" />
              <h1 className="font-semibold text-sm leading-5 text-deep-blue">
                LANGUAGES
              </h1>
            </div>
            <div className="hover:cursor-pointer">
              <img
                src="/Path.png"
                onClick={() => setIsLanguagesOpen(!isLanguagesOpen)}
              />
            </div>
          </div>
          {isLanguagesOpen && (
            <>
              {languages.map((language, index) => {
                return (
                  <div
                    key={language + index}
                    onClick={() => setSelectedLanguage(language)}
                    className={`p-2 px-6 hover:cursor-pointer text-grey8-dark-text bg-grey1 border-b-[1px] border-divider font-normal leading-6 text-base ${
                      language === selectedLanguage && "bg-grey2 text-axa-blue"
                    }`}
                  >
                    {language}
                  </div>
                );
              })}
            </>
          )}
          {isAuthenticated ? (
            <div className="flex justify-between items-center p-4 py-6 border-b-[1px] border-divider">
              <div
                className="flex justify-between hover:cursor-pointer"
                onClick={() => {
                  logout({
                    logoutParams: {
                      returnTo: window.location.origin,
                    },
                  });
                }}
              >
                <img className="mr-2" src="/LogoutIcon.png" />
                <h1 className="font-semibold text-sm leading-5 text-deep-blue">
                  LOG OUT
                </h1>
              </div>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-center p-4 py-6 border-b-[1px] border-divider">
                <div
                  className="flex justify-between hover:cursor-pointer"
                  onClick={() =>
                    loginWithRedirect({
                      appState: { returnTo: window.location.pathname },
                    })
                  }
                >
                  <img className="mr-2" src="/LogoutIcon.png" />
                  <h1 className="font-semibold text-sm leading-5 text-deep-blue">
                    LOG IN
                  </h1>
                </div>
              </div>
              <div className="flex justify-between items-center p-4 py-6 border-b-[1px] border-divider">
                <div
                  className="flex justify-between hover:cursor-pointer"
                  onClick={() =>
                    loginWithRedirect({
                      appState: {
                        returnTo: window.location.pathname, // redirect location after signup
                      },
                      authorizationParams: {
                        // send authorizationParams object as query parameters of the call to the Auth0 /authorize endpoint
                        screen_hint: "signup", // set screen_hint with a value of 'signup' to send to the sign-up page
                      },
                    })
                  }
                >
                  <img className="mr-2" src="/LogoutIcon.png" />
                  <h1 className="font-semibold text-sm leading-5 text-deep-blue">
                    REGISTER
                  </h1>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
