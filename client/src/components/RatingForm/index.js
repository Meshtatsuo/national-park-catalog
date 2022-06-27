import React, { useState, useEffect } from "react";
import axios from "axios";

import StarRating from "../StarRating";

function RatingForm() {
  return (
    <div>
      <div>
        <StarRating />
      </div>
    </div>
  );
}

export default RatingForm;
