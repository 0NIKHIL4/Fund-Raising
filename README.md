
#  This project is made under PUSH BRB HACKATHON

![Screenshot from 2024-01-03 06-49-56](https://github.com/Vikash-8090-Yadav/AlchemyCLub/assets/85225156/688f9fa8-0fdb-4cd8-8b29-08ea09da99c1)



# AlchemyClub Dao Club

Alchemy Dao Club allows you to manage investment clubs, and to spread access to participate in investment funds to anyone, decentralized, agile, and without bureaucracy.Implementing a comprehensive on-chain governance system allows DataDAO members to create and vote on proposals, covering aspects such as member management, dataset storage and distribution, and token distribution. This ensures a democratic and transparent decision-making process within the DAO.

For years I have wanted to participate in fund initiatives to invest in projects (startups and others), but the bureaucracy, the high requirements, and many other problems make it very difficult. And it is something that not only I experience, but also many other people who have a little money and want to support projects in the medium/long term.

The exact size of the private investment fund market is difficult to determine, as there is no single, comprehensive source of data. However, it is estimated that this market has experienced significant growth in recent decades. According to Bain & Company's Global Private Equity Report 2021, assets under management in the private equity industry reached a record of approximately US$4.6 trillion in 2020. In addition to traditional private equity, there are also other types of private investment funds, such as hedge funds, venture capital funds, and private debt funds. Each of these segments has distinct characteristics and investment approaches.

Therefore, through DAO (decentralized organizations) we can create structures so that anyone can invest, through investment clubs (by affinity of ideas, professional relationship, etc.) through Blockchain from anywhere in the world and with fewer requirements. That is why Alchemy Club  was born.

<br>

## 📋 Table of Contents

- [Introduction](#introduction)
- [Installation](#-setting-up-the-project-locally)
- [Challenges we ran into](#-challenges-we-ran-into)
- [Technologies we used](#%EF%B8%8Ftechnologies-we-used)
- [Video Demo](#-video-demo)
- [Contributing](#-contributing)

</div>
<a href="#top">Back to top</a>




## Smart Contract deployed on Polygon testnet
- Smart contract Account - 0xd8448c6f5eba8c621268814961bd32892e866adb
- https://mumbai.polygonscan.com/address/0xd8448c6f5eba8c621268814961bd32892e866adb
![Screenshot from 2024-01-03 06-17-57](https://github.com/Vikash-8090-Yadav/AlchemyCLub/assets/85225156/4699f21d-3ac4-4d35-8c5a-465bcd1b8378)

# Features of Alchemy Club

- Gasless Transaction:  Gas Manager will pay for the gas fee to execute this userOp demonstrating the sponsorship part.

 **Gas Manager Dasboard**

 ![Screenshot from 2024-01-03 06-39-18](https://github.com/Vikash-8090-Yadav/AlchemyCLub/assets/85225156/ba038927-7415-45da-82b6-f2d279981d91)

![Screenshot from 2024-01-03 06-38-51](https://github.com/Vikash-8090-Yadav/AlchemyCLub/assets/85225156/0e4a65ca-1875-40df-b711-20eb79388d2e)

**Transaction**

![Screenshot from 2024-01-03 06-30-54](https://github.com/Vikash-8090-Yadav/AlchemyCLub/assets/85225156/5437935a-38a0-4f04-aad3-1c76f785e392)

- web2 user  onboard: I  am uisng particle network for the Login which show Common authentication mechnaism like Google,Discord,Facebook

  ![Screenshot from 2024-01-03 06-44-03](https://github.com/Vikash-8090-Yadav/AlchemyCLub/assets/85225156/dbab93d4-55e6-4b23-ba46-a2e2239d592d)

  **SCA inbuilt wallet for easy acess for naive users**
![Screenshot from 2024-01-03 07-04-00](https://github.com/Vikash-8090-Yadav/AlchemyCLub/assets/85225156/2a770213-5db2-45e6-935e-b769bb203299)



-- User Operation :  All useroperation started with this code 

```
const result = await provider.sendUserOperation({
                target: marketplaceAddress, // Replace with the desired target address
                data: encodedData, // Replace with the desired call data
              });
        
              const txHash = await provider.waitForUserOperationTransaction(
                result.hash
              );
            
              console.log("\nTransaction hash: ", txHash);
            
              const userOpReceipt = await provider.getUserOperationReceipt(
                result.hash
              );
```
All code for   Smart  Contract Account  & connnection to Particle network can be found here: https://github.com/Vikash-8090-Yadav/AlchemyCLub/blob/main/Frontend/src/components/Hooks/Connection.jsx

<be>

## 💡Introduction

## What you can currently do in this version is:

- Create investment clubs: Just define a name and the club will be associated with the account of the user who creates it (owner).
- Join or leave clubs: Anyone with an aeternity blockchain account can join the available investment clubs, as well as leave one, with just a couple of clicks.
- Contribute to the club: Any member of a club can contribute to the common fund (pool), depositing AE coins that can be used in proposals.
- Create and Vote on Proposals: Any member who has contributed funds to the club pool can create proposals, giving a description, amount (not to exceed the pool amount), and recipient, with a view to investing in any business/person in a project. Also, all members can approve or reject the proposal (only one vote per member is allowed on each proposal).
- Run Proposals: A proposal owner can execute a proposal (if approval is greater than rejection), which will cause the proposal amount to be sent to the specified recipient. The owner can also close a proposal, in case of not continuing with it, either as a cancellation, publication error or to avoid sending funds.
- Timing voting:  After  creation of proposal there is only about 5 min time is given to the  mmeber to  vote.


## Restrictions
The club smart contract has some restrictions, similar to real hedge funds:

- Up to 99 members per club (in many jurisdictions, such as the USA and Chile, this is the maximum limit of club members for certain purposes and types of clubs).
- Only members can participate in club instances.
- Only members who contribute funds to a club have the right to create proposals.
- Only proposal creators can execute them.


## 💥 Challenges we ran into
I faced issue with the accout abstraction  bundler and gas manager.
I faced issue with the persistance of Particle network gets solved  by the mentor: https://github.com/Vikash-8090-Yadav/AlchemyCLub/pull/1

    
<br>

<a href = "#top">Back to top</a>



### 	▶️ Experience the Live Site by Clicking the Link Below
<br>
<div align="center">
  <table>
    <tr>
      <th>Deployed On</th>
      <th>URL</th>
    </tr>
    <tr>
      <td>Vercel</td>
      <td>
        https://alchemy-c-lub.vercel.app/
      </td>
    </tr>
    </tr>
    </table>
</div>
<br><br>

## 🚀 Setting up the project locally

To run the  Alchemy Club locally, follow these steps:
1. Clone the repository:
 ```bash
 git clone  https://github.com/Vikash-8090-Yadav/AlchemyCLub.git
 ```
 2. Navigate to the project directory:
```bash
cd  AlchemyCLub
```
3. Node Re-versioning

```bash
export NODE_OPTIONS=--openssl-legacy-provider
```

4. Install the dependencies:
```bash
npm install --legacy-peer-deps
```

6. Access the dApp:
```bash
npm start
```
Open your web browser and visit the URL SHOWING IN UR TERMINAL to interact with the Trasure  DAO CLUB

<br>

## 🛠️Technologies we used


[![Powered by Lighthouse](https://img.shields.io/badge/Powered_by-Lighthouse-ff69b4?logo=lighthouse)](https://lighthouse.filecoin.io/)
[![Built with React.js](https://img.shields.io/badge/Built_with-React.js-61DAFB?logo=react)](https://reactjs.org/)
[![Developed in Motoko](https://img.shields.io/badge/Developed_in-Motoko-2196F3?logo=dfinity)](https://sdk.dfinity.org/)
[![Tailwind CSS](https://img.shields.io/badge/Styled_with-Tailwind_CSS-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Powered by Ethereum](https://img.shields.io/badge/Powered_by-Ethereum-3C3C3D?logo=ethereum)](https://ethereum.org/)

| Technology        | Description                                                | Official Website                                     |
|-------------------|------------------------------------------------------------|------------------------------------------------------|
| React.js          | JavaScript library for building user interfaces, often used for server-rendered or statically-generated applications | [React.js](https://reactjs.org/)                      |
| Tailwind CSS      | Utility-first CSS framework for building custom designs   | [Tailwind CSS](https://tailwindcss.com/)              |
| Solidity | Programming language used for smart contract development on the Ethereum blockchain | https://docs.soliditylang.org/ |
|LightHouse | Store file Secure, Reliable, & Lightning-Fast with Lighthouse. |https://www.lighthouse.storage/|
| Alchmey| The most reliable way to build web3 apps Powerful set of APIs, SDKs, and tools to build and scale your web3 app with ease.| https://www.alchemy.com/|



<be>


## 🎥 Video Demo

https://youtu.be/TzTiBTY_O1A


## 🤝 Contributing

Contributions to Dao Club are always welcome! If you'd like to contribute, please follow these guidelines:
Fork the repository.

Create a new branch for your feature or bug fix:

```
git checkout -b feature/your-feature-name
```
Commit your changes:

```
git commit -m 'Add some feature'
```
Push the branch:

```
git push origin feature/your-feature-name
```
Open a pull request.

We appreciate your contributions and thank you for helping us improve Algo-Media!

<br >
</div>

## LICENSE

```
MIT
```

## Project Contributor (Member)

<table>
<tr>
<td align="center"><a href="https://github.com/Vikash-8090-Yadav"><img src="https://avatars.githubusercontent.com/u/85225156?s=400&u=3363e9db42792ae40a18b3119c745930bb85cf47&v=4" width=150px height=150px /></a></br> <h4 style="color:red;">Vikash Kumar Yadav</h4>
<a href="https://www.linkedin.com/in/vikash-kumar-yadav-8090/"><img src="https://mpng.subpng.com/20180324/vhe/kisspng-linkedin-computer-icons-logo-social-networking-ser-facebook-5ab6ebfe5f5397.2333748215219374063905.jpg" width="32px" height="32px"></a>
   </td>
  
   
</div>
<a href="#top">Back to top ⬆️</a>

