import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { Wallet } from 'lucide-react';
export default function WalletConnect(){
 const {address,isConnected}=useAccount(); const {connect,connectors,isPending}=useConnect(); const {disconnect}=useDisconnect();
 return <div className="wallet"><button className="button button-small" onClick={()=>isConnected?disconnect():connect({connector:connectors[0]})}><Wallet size={15}/>{isConnected?`${address?.slice(0,6)}…${address?.slice(-4)} · DISCONNECT`:isPending?'CONNECTING…':'CONNECT WALLET'}</button></div>
}
