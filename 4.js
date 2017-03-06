function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Are you over 18?');
  }
}

checkAge();

//Q: If we remove else, will that function work the same?

function checkAge2(age2) {
  if (age2 > 18) {
    return true;
  }
  // ...
  return confirm('Are you over 18? 2');
}
checkAge2();


//A: will be the same and less nesting, if returning