from utils.pass_hash import PassUtil
class User:
    def __init__(self, username, password, id = None):
        self.username = username 
        self.password = password
        self.id = id
    
    def hash_password(self):
        self.password = PassUtil.generate_hash(self.password)

    def is_password_valid(self, password, hash): 
        return PassUtil.verify_hash(password, hash)

    def object(self):
        return {"username": self.username, "password": self.password, "id": self.id}