pipeline{
  agent any
  stages{
    stage('Test pipe'){
    steps{
    	echo 'This is also a test'
      bat 'mvn --version'
      sh '${MAVEN_HOME}/bin/mvn clean package'
    }
       
    }
  }
}
