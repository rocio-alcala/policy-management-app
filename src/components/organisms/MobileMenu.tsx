import { useAuth0 } from "@auth0/auth0-react";

interface MobileMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MobileMenu({ isMenuOpen }: MobileMenuProps) {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  return (
    <>
      {isMenuOpen && (
        <div className="absolute top-0 right-0 bg-white z-10 w-full">
          <div className="py-1">
            <div className="flex justify-between items-center p-4 py-6 border-b-[1px] border-divider">
              <div className="flex justify-between hover:cursor-pointer">
                <img className="mr-2" src="../../../public/ContactIcon.png" />
                <h1 className="font-semibold text-sm leading-5 text-deep-blue">
                  CONTACT
                </h1>
              </div>
              <div className="hover:cursor-pointer">
                <img src="../../../public/Path.png" />
              </div>
            </div>
            <div className="flex justify-between items-center p-4 py-6 border-b-[1px] border-divider">
              <div className="flex justify-between hover:cursor-pointer">
                <img className="mr-2" src="../../../public/LanguagesIcon.png" />
                <h1 className="font-semibold text-sm leading-5 text-deep-blue">
                  LANGUAGES
                </h1>
              </div>
              <div className="hover:cursor-pointer">
                <img src="../../../public/Path.png"/>
              </div>
            </div>
            {isAuthenticated ? (
              <div className="flex justify-between items-center p-4 py-6 border-b-[1px] border-divider">
                <div
                  className="flex justify-between hover:cursor-pointer"
                  onClick={() => {
                    logout({
                      logoutParams: {
                        returnTo: window.location.origin
                      }
                    });
                  }}
                >
                  <img className="mr-2" src="../../../public/LogoutIcon.png" />
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
                        appState: { returnTo: window.location.pathname }
                      })
                    }
                  >
                    <img
                      className="mr-2"
                      src="../../../public/LogoutIcon.png"
                    />
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
                          returnTo: window.location.pathname //redirect location after signup
                        },
                        authorizationParams: {
                          //authorizationParams object as query parameters of the call to the Auth0 /authorize endpoint
                          screen_hint: "signup" //set screen_hint with a value of 'signup' to send to the sign-up page
                        }
                      })
                    }
                  >
                    <img
                      className="mr-2"
                      src="../../../public/LogoutIcon.png"
                    />
                    <h1 className="font-semibold text-sm leading-5 text-deep-blue">
                      REGISTER
                    </h1>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
