import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";
 
export type State = {
  rateCards: RateCard[] | undefined;
};
 
type Setter<T> = Dispatch<SetStateAction<T>>;
 
export type Actions = {
  setRateCards: Setter<RateCard[] | undefined>;
};
 
export type Context = [State, Actions];
 
const AdminStateContext = createContext<State | null>(null);
const AdminActionsContext = createContext<Actions | null>(null);
 
export function useAdminState(): State {
  const context = useContext(AdminStateContext);
  if (!context) throw new ContextError("AdminState");
  return context;
}
 
export function useAdminActions(): Actions {
  const context = useContext(AdminActionsContext);
  if (!context) throw new ContextError("AdminActions");
 
  return context;
}
 
export function useAdminContext(): Context {
  return [useAdminState(), useAdminActions()];
}
 
export type Props = {
  children: ReactNode;
};
 
export function AdminProvider({ children }: Props) {
  const [rateCards, setRateCards] = useState<RateCard[] | undefined>(undefined);
 
  const state: State = {
    rateCards,
  };
  const actions: Actions = {
    setRateCards,
  };
 
  return (
    <AdminActionsContext.Provider value={actions}>
      <AdminStateContext.Provider value={state}>
        <>
          {children}
        </>
      </AdminStateContext.Provider>
    </AdminActionsContext.Provider>
  );
}