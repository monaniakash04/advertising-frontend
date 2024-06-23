import React from "react";
import "../index.css";

const PricePage = () => {
  return (
    <div class="border p-6 m-5 rounded-lg bg-white shadow-md font ">
      <h2 class="text-2xl font-bold text-[#009F6B]">
        Important Notice for Posting Ads
      </h2>
      <p class="text-[#009F6B] mt-4">
        To post an advertisement on our website, please follow the steps below:
      </p>
      <ol class=" list-inside mt-4 text-[#009F6B]">
        <li class="mt-2  text-black ">
          <strong className="text-[#009F6B] font">Payment Required:</strong>{" "}
          Before you can create a post, you must first complete the payment
          process. The cost is <strong>₹30 per ad</strong>. Please pay the
          required amount to the following number:{" "}
          <strong>+91 9854852695</strong>.
        </li>
        <li class="mt-2 text-black">
          <strong className="font text-[#009F6B]">Ad Creation:</strong> Once the
          payment is confirmed, you can create your advertisement.
        </li>
        <li class="mt-2 text-black">
          <strong className="font text-[#009F6B]">Verification Process:</strong>{" "}
          After you submit your ad, our team will review it to ensure it meets
          our policy guidelines.
        </li>
        <li class="mt-2 text-black">
          <strong className="font text-[#009F6B]">
            Approval Notification:
          </strong>{" "}
          If your ad satisfies our policies, we will approve it and publish it
          on our website. You will be notified via email once your ad is live.
        </li>
        <li class="mt-2 text-black">
          <strong className="font text-[#009F6B]">Ad Removal:</strong> Please
          note that your ad will be automatically removed after &nbsp;
          <strong>10 days</strong>
        </li>
      </ol>
      <p class="text-[#009F6B] mt-4">Thank you for using our platform!</p>
    </div>
  );
};

export default PricePage;
