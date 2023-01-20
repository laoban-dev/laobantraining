import { mainValue } from "./main";

describe ( "main", () => {
  it ( "should have a mainValue", () => {
    expect ( mainValue ).toEqual ( "Main gets its data:\n" +
      "from Lib2: Lib2 value is found from lib1Value\n" +
      "and lib3:  lib3Value" );
  } );
} )