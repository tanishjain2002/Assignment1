// create a variable to hold your NFT's
let NFT_Count_ = 0;

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata,
// and store it in the variable above.
function mintNFT(Name, Course, Roll_no, College) {
  const NFT = {
    Name: Name,
    Course: Course,
    Roll_No: Roll_no,
    College: College,
  };
  NFT_Count_++;
  return NFT;
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs(nfts) {
  for (let i = 0; i < nfts.length; i++) {
    const NFT = nfts[i];
    console.log("Student's Name: " + NFT.Name);
    console.log("Course Choosen: " + NFT.Course);
    console.log("Student's Roll No.: " + NFT.Roll_No);
    console.log("College Name: " + NFT.College);
    console.log("______________________________________");
  }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
  console.log("Total Supply: " + NFT_Count_);
}

// call your functions below this line
const myNFTs = [];

const nft1 = mintNFT("Aman", "CSE", "001", "IIT Jodhpur");
myNFTs.push(nft1);

const nft2 = mintNFT("Rajeev", "Forensics", "003", "DTU");
myNFTs.push(nft2);

const nft3 = mintNFT("Mohini", "MBA", "763", "CU");
myNFTs.push(nft3);

const nft4 = mintNFT("Radhika", "Biotechnology", "801", "MU");
myNFTs.push(nft3);

listNFTs(myNFTs);
getTotalSupply();
