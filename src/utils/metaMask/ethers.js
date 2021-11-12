
import { ethers, BigNumber } from "ethers";
// import { Message } from "element-ui";
import { ElMessage } from 'element-plus';
import transform from "lodash.transform";
// import preSaleDragonEggJson from './PreSaleDragonEggV1.json'
import preSaleDragonEggJson from './dragonJson/PreSaleDragonEgg.json' // 预购
import DragonMainlandToken from './dragonJson/DragonMainlandToken.json' // 龙合约
import DragonExchange from './dragonJson/DragonExchange.json' // 市场
import DragonMainlandVoucher from './dragonJson/DragonMainlandVoucher.json' // 兑换
import DragonMainlandShardIDO from './dragonJson/DragonMainlandShardIDO.json' // IDO报名
import DragonStaking from './dragonJson/DragonStaking.json' // 质押
import { getSession, removeSession } from "@/utils/auth.js";
import store from '@/store'
import router from '@/router'
// const store = useStore();
function getProvider() {
  let provider = new ethers.providers.Web3Provider(window.ethereum);
  return provider;
}

// 获取钱包余额
async function myWallet() {
  let banlance = await getProvider().getBalance(getSession('address'))
  let balanceFormat = ethers.utils.formatEther(banlance)
  return balanceFormat
}

// 钱包交易转账
function transferAccounts() {
  let getSigner = getProvider().getSigner()
  const tx = getSigner.sendTransaction({
    to: '0xD305B9Aa6dA059Ee4c80CE0B0f6EEa85B622bE7F',
    value: ethers.utils.parseEther("0.01")
  })
  return tx
}

// 获取签名
function getSiner(txt) {
  let getSigner = getProvider().getSigner()
  let signer = getSigner.signMessage(txt);
  return signer
}


/*  合约方法-start */

// 获取预售合约
function getContract() {
  console.log('=======preSaleDragonEggJson======', window.ethereum)
  if (!window.ethereum.selectedAddress) {
    return initWallet
  }
  let abi = preSaleDragonEggJson.abi;
  // let provider = getProvider();
  let wallet = getProvider().getSigner()
  // 地址来自上面部署的合约
  let contractAddress = process.env.NODE_ENV === 'production' ? preSaleDragonEggJson.address_prod : preSaleDragonEggJson.address;
  // 使用Provider 连接合约，将只有对合约的可读权限
  let contract = new ethers.Contract(contractAddress, abi, wallet);
  return contract
}

// 获取赠送龙蛋合约
function getSendDragonContract() {
  if (!window.ethereum.selectedAddress) {
    return initWallet
  }
  let abi = DragonMainlandToken.abi;
  let wallet = getProvider().getSigner()
  // 地址来自上面部署的合约
  let contractAddress = process.env.NODE_ENV === 'production' ? DragonMainlandToken.address_prod : DragonMainlandToken.address;
  // 使用Provider 连接合约，将只有对合约的可读权限
  let contract = new ethers.Contract(contractAddress, abi, wallet);
  return contract
}


// 获取市场交易合约
function getMarketContract() {
  if (!window.ethereum.selectedAddress) {
    return initWallet
  }
  let abi = DragonExchange.abi;
  let wallet = getProvider().getSigner()
  // 地址来自上面部署的合约
  let contractAddress = process.env.NODE_ENV === 'production' ? DragonExchange.address_prod : DragonExchange.address;
  // 使用Provider 连接合约，将只有对合约的可读权限
  let contract = new ethers.Contract(contractAddress, abi, wallet);
  return contract
}

// 获取龙蛋兑换合约
function getExchangeContract() {
  if (!window.ethereum.selectedAddress) {
    return initWallet
  }
  let abi = DragonMainlandVoucher.abi;
  let wallet = getProvider().getSigner()
  // 地址来自上面部署的合约
  let contractAddress = process.env.NODE_ENV === 'production' ? DragonMainlandVoucher.address_prod : DragonMainlandVoucher.address;
  // 使用Provider 连接合约，将只有对合约的可读权限
  let contract = new ethers.Contract(contractAddress, abi, wallet);
  return contract
}


// 获取龙蛋兑换合约
function getDragonMainlandShardIDOContract() {
  if (!window.ethereum.selectedAddress) {
    return initWallet
  }
  let abi = DragonMainlandShardIDO.abi;
  let wallet = getProvider().getSigner()
  // 地址来自上面部署的合约
  let contractAddress = process.env.NODE_ENV === 'production' ? DragonMainlandShardIDO.address_prod : DragonMainlandShardIDO.address;
  // 使用Provider 连接合约，将只有对合约的可读权限
  let contract = new ethers.Contract(contractAddress, abi, wallet);
  return contract
}

// 获取质押合约
function getDragonStakingContract() {
  if (!window.ethereum.selectedAddress) {
    return initWallet
  }
  let abi = DragonStaking.abi;
  let wallet = getProvider().getSigner()
  // 地址来自上面部署的合约
  let contractAddress = process.env.NODE_ENV === 'production' ? DragonStaking.address_prod : DragonStaking.address;
  // 使用Provider 连接合约，将只有对合约的可读权限
  let contract = new ethers.Contract(contractAddress, abi, wallet);
  return contract
}

// 合约授权一次
async function setApprovalForAll(data) {
  console.log('setApprovalForAll', data)
  let isApprove = await isApprovedForAll(data)
  console.log('isApprove', isApprove)

  if (isApprove) {
    return true
  }
  const contract = getSendDragonContract()
  let params = {
    contractAddress: data.contractAddress,
    bool: data.bool,
  }
  console.log('setApprovalForAll', contract)
  
  try {
    let res = await contract.setApprovalForAll(params.contractAddress, params.bool)
    let receipt = await res.wait()
    return res
  } catch (error) {
    return false
  }
  
}

// 开始授权-已检测
async function startApprovalForAll(data) {
  const contract = getSendDragonContract()
  let params = {
    contractAddress: data.contractAddress,
    bool: data.bool,
  }
  try {
    let res = await contract.setApprovalForAll(params.contractAddress, params.bool)
    let receipt = await res.wait()
    return res
  } catch (error) {
    return false
  }
  
}

// 是否授权
async function isApprovedForAll(data) {
  const contract = getSendDragonContract()
  let params = {
    address: data.address,
    contractAddress: data.contractAddress,
  }
  let res = await contract.isApprovedForAll(params.address, params.contractAddress)
  return res
}



/*  合约方法-end */

// 初始化ethers
async function initWallet() {


  if (typeof window.ethereum === "undefined") {
    ElMessage.error("You do not have BSC wallet installed！");
    return "";
  }
  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
    jsonrpc: "2.0"
  });



  if (!accounts || accounts.length == 0) {
    ElMessage.error("You have not unlocked the BSC wallet！");

    return "";
  }
  // Vue.prototype.$address = accounts[0];
  let address = accounts[0];
  console.log('window.ethereum.networkVersion=============', window.ethereum)
  let currNetwork = process.env.NODE_ENV === "production" ? 56 : 97;
  // let currNetwork = 56 // 97 56;
  // let currNetwork = 97;
  if (window.ethereum.networkVersion != currNetwork) {
    ElMessage.error(
      currNetwork === 56
        ? "Please switch to BSCMainnet network！"
        : "Please switch to BSCTestnet network！"
    );
    return "";
  }



  let banlance = await getProvider().getBalance(address)
  let balanceFormat = ethers.utils.formatEther(banlance)
  sessionStorage.setItem("address", address);
  sessionStorage.setItem("banlance", balanceFormat);
  store.commit('login/SET_USER_WALLET')


  return address;
}

async function getBalanceHandle() {
  let address = sessionStorage.getItem('address')
  let banlance = await getProvider().getBalance(address)
  let balanceFormat = ethers.utils.formatEther(banlance)
  sessionStorage.setItem("banlance", balanceFormat);
  // sessionStorage.setItem("banlance", '0.14');
  console.log('getBalanceHandle=============balanceFormat', balanceFormat)
  store.commit('login/SET_USER_WALLET')
}

// 监听钱包更换地址
(() => {
  if (window.ethereum && window.ethereum.on) {
    window.ethereum.on('accountsChanged', (accounts) => {

      console.log('accountsChanged', accounts)
      // let address = accounts[0];
      // sessionStorage.setItem("address", address);
      // console.log('store', store,)
      // store.commit('metaMask/SET_ISLINKMETAMASK',)
      sessionStorage.removeItem('Token')
      sessionStorage.removeItem('user')
      sessionStorage.removeItem('address')
      sessionStorage.removeItem('banlance')
      // sessionStorage.clear()
      store.commit('login/SET_LOGIN')
      router.push('/login')
    })

    //监听网络切换
    window.ethereum.on('chainChanged', (networkIDstring) => {
      console.log('networkIDstring=====', networkIDstring)
    })


  }

})()

//导出相应的方法
export { initWallet, getSiner, myWallet, transferAccounts, getContract, getSendDragonContract, getMarketContract, getExchangeContract, getDragonMainlandShardIDOContract,getDragonStakingContract, getBalanceHandle, setApprovalForAll, isApprovedForAll, startApprovalForAll }

