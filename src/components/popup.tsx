import { useDispatch, useSelector } from 'react-redux';
import { chooseChain } from '../redux/actions/modal-actions';
import { Chain } from '../interfaces/chain.interface';

const Popup = () => {

    const showModal = useSelector<any, any>(state => state.dashboard.showModal);
    const dispatch = useDispatch();

    function chooseNetwork(chain: Chain) {
        //@ts-ignore
        dispatch(chooseChain(chain));
    }

    return (
        <>
            {showModal && <div className="fixed inset-0 z-10 overflow-y-auto shadow-2xl backdrop-blur-sm flex justify-center items-center h-[100vh]">
                <div className="relative w-full max-w-md max-h-full border-2 bg-[#f5f5dc] border-black rounded-md">
                    <div className="relative bg-white rounded-lg shadow dark:bg-transparent border-3 border-white">

                        <div className="px-6 py-6 lg:px-8 text-center flex flex-col space-y-3">
                            <h3 className="mb-4 text-xl font-medium text-gray-900 mx-auto">Choose a network</h3>
                            <input type="text" onClick={() => chooseNetwork(Chain.BSC)} readOnly={true} className='cursor-pointer p-2 outline-none rounded-md border-black border-2 text-center' value={"BSC"} placeholder='BSC' />
                            <input type="text" onClick={() => chooseNetwork(Chain.ETH)} readOnly={true} className='cursor-pointer p-2 outline-none rounded-md border-black border-2 text-center' value={"ETH"} placeholder='ETH' />
                            <input type="text" onClick={() => chooseNetwork(Chain.TRON)} readOnly={true} className='cursor-pointer p-2 outline-none rounded-md border-black border-2 text-center' value={"TRON"} placeholder='TRON' />
                        </div>
                    </div>
                </div>
            </div>}
        </>
    )
}
export default Popup